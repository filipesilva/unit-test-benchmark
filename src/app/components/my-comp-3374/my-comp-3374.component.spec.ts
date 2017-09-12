import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3374Component } from './my-comp-3374.component';

describe('MyComp3374Component', () => {
  let component: MyComp3374Component;
  let fixture: ComponentFixture<MyComp3374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
