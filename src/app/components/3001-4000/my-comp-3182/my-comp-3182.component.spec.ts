import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3182Component } from './my-comp-3182.component';

describe('MyComp3182Component', () => {
  let component: MyComp3182Component;
  let fixture: ComponentFixture<MyComp3182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
