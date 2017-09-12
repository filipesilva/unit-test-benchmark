import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3651Component } from './my-comp-3651.component';

describe('MyComp3651Component', () => {
  let component: MyComp3651Component;
  let fixture: ComponentFixture<MyComp3651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
