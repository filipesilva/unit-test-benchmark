import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3161Component } from './my-comp-3161.component';

describe('MyComp3161Component', () => {
  let component: MyComp3161Component;
  let fixture: ComponentFixture<MyComp3161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
