import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4228Component } from './my-comp-4228.component';

describe('MyComp4228Component', () => {
  let component: MyComp4228Component;
  let fixture: ComponentFixture<MyComp4228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
