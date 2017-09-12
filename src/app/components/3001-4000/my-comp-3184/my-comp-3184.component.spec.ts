import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3184Component } from './my-comp-3184.component';

describe('MyComp3184Component', () => {
  let component: MyComp3184Component;
  let fixture: ComponentFixture<MyComp3184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
