import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3163Component } from './my-comp-3163.component';

describe('MyComp3163Component', () => {
  let component: MyComp3163Component;
  let fixture: ComponentFixture<MyComp3163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
