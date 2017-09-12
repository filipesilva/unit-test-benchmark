import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3053Component } from './my-comp-3053.component';

describe('MyComp3053Component', () => {
  let component: MyComp3053Component;
  let fixture: ComponentFixture<MyComp3053Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3053Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
