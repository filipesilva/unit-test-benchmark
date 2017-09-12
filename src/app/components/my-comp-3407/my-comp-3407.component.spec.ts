import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3407Component } from './my-comp-3407.component';

describe('MyComp3407Component', () => {
  let component: MyComp3407Component;
  let fixture: ComponentFixture<MyComp3407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
