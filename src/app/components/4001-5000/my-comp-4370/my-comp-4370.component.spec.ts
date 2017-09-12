import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4370Component } from './my-comp-4370.component';

describe('MyComp4370Component', () => {
  let component: MyComp4370Component;
  let fixture: ComponentFixture<MyComp4370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
