import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1913Component } from './my-comp-1913.component';

describe('MyComp1913Component', () => {
  let component: MyComp1913Component;
  let fixture: ComponentFixture<MyComp1913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
