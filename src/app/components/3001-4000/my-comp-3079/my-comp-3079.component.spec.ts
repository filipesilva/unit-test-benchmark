import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3079Component } from './my-comp-3079.component';

describe('MyComp3079Component', () => {
  let component: MyComp3079Component;
  let fixture: ComponentFixture<MyComp3079Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3079Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
