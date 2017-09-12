import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2905Component } from './my-comp-2905.component';

describe('MyComp2905Component', () => {
  let component: MyComp2905Component;
  let fixture: ComponentFixture<MyComp2905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
