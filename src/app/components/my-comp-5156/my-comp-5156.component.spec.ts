import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5156Component } from './my-comp-5156.component';

describe('MyComp5156Component', () => {
  let component: MyComp5156Component;
  let fixture: ComponentFixture<MyComp5156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
