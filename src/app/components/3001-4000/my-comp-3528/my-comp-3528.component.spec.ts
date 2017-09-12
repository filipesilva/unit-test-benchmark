import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3528Component } from './my-comp-3528.component';

describe('MyComp3528Component', () => {
  let component: MyComp3528Component;
  let fixture: ComponentFixture<MyComp3528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
