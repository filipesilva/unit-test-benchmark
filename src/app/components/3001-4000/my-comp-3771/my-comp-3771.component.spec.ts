import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3771Component } from './my-comp-3771.component';

describe('MyComp3771Component', () => {
  let component: MyComp3771Component;
  let fixture: ComponentFixture<MyComp3771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
