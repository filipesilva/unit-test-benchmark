import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3669Component } from './my-comp-3669.component';

describe('MyComp3669Component', () => {
  let component: MyComp3669Component;
  let fixture: ComponentFixture<MyComp3669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3669Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
