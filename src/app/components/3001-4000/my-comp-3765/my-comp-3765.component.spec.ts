import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3765Component } from './my-comp-3765.component';

describe('MyComp3765Component', () => {
  let component: MyComp3765Component;
  let fixture: ComponentFixture<MyComp3765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
