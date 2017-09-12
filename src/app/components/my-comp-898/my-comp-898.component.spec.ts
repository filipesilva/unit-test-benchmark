import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp898Component } from './my-comp-898.component';

describe('MyComp898Component', () => {
  let component: MyComp898Component;
  let fixture: ComponentFixture<MyComp898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp898Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
