import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5175Component } from './my-comp-5175.component';

describe('MyComp5175Component', () => {
  let component: MyComp5175Component;
  let fixture: ComponentFixture<MyComp5175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
