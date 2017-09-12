import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3963Component } from './my-comp-3963.component';

describe('MyComp3963Component', () => {
  let component: MyComp3963Component;
  let fixture: ComponentFixture<MyComp3963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
