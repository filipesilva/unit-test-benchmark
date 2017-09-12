import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3959Component } from './my-comp-3959.component';

describe('MyComp3959Component', () => {
  let component: MyComp3959Component;
  let fixture: ComponentFixture<MyComp3959Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3959Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
