import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5942Component } from './my-comp-5942.component';

describe('MyComp5942Component', () => {
  let component: MyComp5942Component;
  let fixture: ComponentFixture<MyComp5942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
