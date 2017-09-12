import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5731Component } from './my-comp-5731.component';

describe('MyComp5731Component', () => {
  let component: MyComp5731Component;
  let fixture: ComponentFixture<MyComp5731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5731Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
