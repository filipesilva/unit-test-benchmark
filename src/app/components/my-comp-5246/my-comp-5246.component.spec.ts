import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5246Component } from './my-comp-5246.component';

describe('MyComp5246Component', () => {
  let component: MyComp5246Component;
  let fixture: ComponentFixture<MyComp5246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
