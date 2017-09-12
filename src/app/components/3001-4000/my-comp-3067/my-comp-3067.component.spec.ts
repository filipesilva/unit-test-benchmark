import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3067Component } from './my-comp-3067.component';

describe('MyComp3067Component', () => {
  let component: MyComp3067Component;
  let fixture: ComponentFixture<MyComp3067Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3067Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
