import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2606Component } from './my-comp-2606.component';

describe('MyComp2606Component', () => {
  let component: MyComp2606Component;
  let fixture: ComponentFixture<MyComp2606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
