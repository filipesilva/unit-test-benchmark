import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3255Component } from './my-comp-3255.component';

describe('MyComp3255Component', () => {
  let component: MyComp3255Component;
  let fixture: ComponentFixture<MyComp3255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
