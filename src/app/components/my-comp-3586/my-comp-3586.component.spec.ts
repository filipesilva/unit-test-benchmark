import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3586Component } from './my-comp-3586.component';

describe('MyComp3586Component', () => {
  let component: MyComp3586Component;
  let fixture: ComponentFixture<MyComp3586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
