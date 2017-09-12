import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3783Component } from './my-comp-3783.component';

describe('MyComp3783Component', () => {
  let component: MyComp3783Component;
  let fixture: ComponentFixture<MyComp3783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
