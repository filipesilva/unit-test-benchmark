import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3875Component } from './my-comp-3875.component';

describe('MyComp3875Component', () => {
  let component: MyComp3875Component;
  let fixture: ComponentFixture<MyComp3875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
