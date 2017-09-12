import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3350Component } from './my-comp-3350.component';

describe('MyComp3350Component', () => {
  let component: MyComp3350Component;
  let fixture: ComponentFixture<MyComp3350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
