import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5250Component } from './my-comp-5250.component';

describe('MyComp5250Component', () => {
  let component: MyComp5250Component;
  let fixture: ComponentFixture<MyComp5250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
