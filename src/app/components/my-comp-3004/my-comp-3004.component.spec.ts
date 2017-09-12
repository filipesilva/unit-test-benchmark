import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3004Component } from './my-comp-3004.component';

describe('MyComp3004Component', () => {
  let component: MyComp3004Component;
  let fixture: ComponentFixture<MyComp3004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
