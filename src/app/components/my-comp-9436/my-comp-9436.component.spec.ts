import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9436Component } from './my-comp-9436.component';

describe('MyComp9436Component', () => {
  let component: MyComp9436Component;
  let fixture: ComponentFixture<MyComp9436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
