import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8606Component } from './my-comp-8606.component';

describe('MyComp8606Component', () => {
  let component: MyComp8606Component;
  let fixture: ComponentFixture<MyComp8606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
