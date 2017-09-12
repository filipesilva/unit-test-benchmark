import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5810Component } from './my-comp-5810.component';

describe('MyComp5810Component', () => {
  let component: MyComp5810Component;
  let fixture: ComponentFixture<MyComp5810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
