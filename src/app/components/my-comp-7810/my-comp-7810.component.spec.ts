import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7810Component } from './my-comp-7810.component';

describe('MyComp7810Component', () => {
  let component: MyComp7810Component;
  let fixture: ComponentFixture<MyComp7810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
