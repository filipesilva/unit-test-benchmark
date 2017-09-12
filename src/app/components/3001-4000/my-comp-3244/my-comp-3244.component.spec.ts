import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3244Component } from './my-comp-3244.component';

describe('MyComp3244Component', () => {
  let component: MyComp3244Component;
  let fixture: ComponentFixture<MyComp3244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
