import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7721Component } from './my-comp-7721.component';

describe('MyComp7721Component', () => {
  let component: MyComp7721Component;
  let fixture: ComponentFixture<MyComp7721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
