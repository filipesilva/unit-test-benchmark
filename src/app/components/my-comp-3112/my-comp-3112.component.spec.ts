import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3112Component } from './my-comp-3112.component';

describe('MyComp3112Component', () => {
  let component: MyComp3112Component;
  let fixture: ComponentFixture<MyComp3112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
