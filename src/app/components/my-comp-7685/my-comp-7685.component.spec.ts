import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7685Component } from './my-comp-7685.component';

describe('MyComp7685Component', () => {
  let component: MyComp7685Component;
  let fixture: ComponentFixture<MyComp7685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
