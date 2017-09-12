import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7831Component } from './my-comp-7831.component';

describe('MyComp7831Component', () => {
  let component: MyComp7831Component;
  let fixture: ComponentFixture<MyComp7831Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7831Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
