import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7111Component } from './my-comp-7111.component';

describe('MyComp7111Component', () => {
  let component: MyComp7111Component;
  let fixture: ComponentFixture<MyComp7111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
