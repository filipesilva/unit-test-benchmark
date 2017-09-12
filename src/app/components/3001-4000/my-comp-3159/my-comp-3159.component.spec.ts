import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3159Component } from './my-comp-3159.component';

describe('MyComp3159Component', () => {
  let component: MyComp3159Component;
  let fixture: ComponentFixture<MyComp3159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
