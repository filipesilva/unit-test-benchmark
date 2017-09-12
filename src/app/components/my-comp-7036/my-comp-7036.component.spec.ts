import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7036Component } from './my-comp-7036.component';

describe('MyComp7036Component', () => {
  let component: MyComp7036Component;
  let fixture: ComponentFixture<MyComp7036Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7036Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
