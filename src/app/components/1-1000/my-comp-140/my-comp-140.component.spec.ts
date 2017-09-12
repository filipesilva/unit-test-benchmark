import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp140Component } from './my-comp-140.component';

describe('MyComp140Component', () => {
  let component: MyComp140Component;
  let fixture: ComponentFixture<MyComp140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
