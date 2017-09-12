import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5488Component } from './my-comp-5488.component';

describe('MyComp5488Component', () => {
  let component: MyComp5488Component;
  let fixture: ComponentFixture<MyComp5488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
