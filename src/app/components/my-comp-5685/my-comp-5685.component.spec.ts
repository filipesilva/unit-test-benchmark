import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5685Component } from './my-comp-5685.component';

describe('MyComp5685Component', () => {
  let component: MyComp5685Component;
  let fixture: ComponentFixture<MyComp5685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
