import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3781Component } from './my-comp-3781.component';

describe('MyComp3781Component', () => {
  let component: MyComp3781Component;
  let fixture: ComponentFixture<MyComp3781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
