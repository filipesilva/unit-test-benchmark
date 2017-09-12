import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp419Component } from './my-comp-419.component';

describe('MyComp419Component', () => {
  let component: MyComp419Component;
  let fixture: ComponentFixture<MyComp419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp419Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
