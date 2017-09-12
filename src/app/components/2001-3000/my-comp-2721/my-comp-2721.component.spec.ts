import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2721Component } from './my-comp-2721.component';

describe('MyComp2721Component', () => {
  let component: MyComp2721Component;
  let fixture: ComponentFixture<MyComp2721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
