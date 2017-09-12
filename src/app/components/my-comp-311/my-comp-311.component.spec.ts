import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp311Component } from './my-comp-311.component';

describe('MyComp311Component', () => {
  let component: MyComp311Component;
  let fixture: ComponentFixture<MyComp311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
